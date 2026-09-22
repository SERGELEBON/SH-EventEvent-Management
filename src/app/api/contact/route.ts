import { NextResponse } from "next/server";

interface ContactBody {
    civility?: string;
    name?: string;
    company?: string;
    phone?: string;
    email?: string;
    subject?: string;
    message?: string;
    formType?: string;
}

export async function POST(req: Request) {
    let body: ContactBody;
    try {
          body = (await req.json()) as ContactBody;
    } catch {
          return NextResponse.json({ error: "Invalid JSON" }, { status: 400 });
    }

  const required = ["name", "phone", "message"];
    for (const key of required) {
          if (!body[key as keyof ContactBody]) {
                  return NextResponse.json(
                    { error: `Missing field: ${key}` },
                    { status: 400 }
                          );
          }
    }

  // Persist to the D1 database so submissions aren't lost.
  try {
        const { getDb } = await import("@/lib/db");
        const db = getDb();
        await db.contactSubmission.create({
                data: {
                          formType: body.formType ?? "contact",
                          civility: body.civility ?? null,
                          name: body.name ?? "",
                          company: body.company ?? null,
                          phone: body.phone ?? "",
                          email: body.email ?? null,
                          subject: body.subject ?? null,
                          message: body.message ?? "",
                },
        });
  } catch {
        // DB is optional; we still acknowledge the submission.
  }

  return NextResponse.json({ ok: true });
}

export async function GET() {
    return NextResponse.json({ ok: true, service: "sh-event-contact" });
}
