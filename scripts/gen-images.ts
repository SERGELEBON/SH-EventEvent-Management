import ZAI from "z-ai-web-dev-sdk";
import fs from "fs";
import path from "path";

const OUT = "/home/z/my-project/public/images";
if (!fs.existsSync(OUT)) fs.mkdirSync(OUT, { recursive: true });

type Job = { name: string; prompt: string; size: string };

const jobs: Job[] = [
  {
    name: "hero-aerial-tents.jpg",
    size: "1536x640",
    prompt:
      "Cinematic aerial drone photograph of a large outdoor evening event with multiple white tents and chapiteaux set up on a green field, warm string lights glowing, elegant round tables with white chairs underneath, dusk sky in deep navy blue, professional event setup, high quality, photorealistic, wide landscape",
  },
  {
    name: "service-equipment.jpg",
    size: "1024x1024",
    prompt:
      "Professional event rental equipment arranged neatly: rows of white folding chairs and gold Chiavari chairs next to a white party tent, bright daylight, clean outdoor setup, photorealistic, commercial photography, high quality",
  },
  {
    name: "service-comfort.jpg",
    size: "1024x1024",
    prompt:
      "Event logistics comfort equipment: a white portable evaporative air cooler, neat stacked interlocking event floor tiles, and a clean white mobile toilet unit arranged at an outdoor event site, bright daylight, photorealistic, commercial photography, high quality",
  },
  {
    name: "service-photography.jpg",
    size: "1024x1024",
    prompt:
      "Professional event photographer holding a DSLR camera photographing an elegant outdoor wedding ceremony, golden hour light, blurred festive background with white chairs and tent, photorealistic, high quality, documentary style",
  },
  {
    name: "feature-large-tents.jpg",
    size: "1344x768",
    prompt:
      "Large white event marquee tents and chapiteaux set up at night on a field, illuminated with warm interior lighting and string lights, dramatic night sky, grand scale event venue, photorealistic, cinematic, high quality",
  },
  {
    name: "feature-chiavari.jpg",
    size: "1344x768",
    prompt:
      "Elegant banquet table setup with gold Chiavari chairs around round tables with white linens, floral centerpieces, soft romantic lighting inside a white tent, upscale wedding reception, photorealistic, high quality, luxury event",
  },
  {
    name: "realization-1.jpg",
    size: "1024x1024",
    prompt:
      "Beautiful outdoor wedding ceremony with white chairs arranged in rows facing a floral arch under a large white tent, sunny day, photorealistic, high quality event photography",
  },
  {
    name: "realization-2.jpg",
    size: "1024x1024",
    prompt:
      "Corporate conference event setup with rows of chairs, stage with backdrop and lighting, professional AV setup inside a large marquee tent, photorealistic, high quality",
  },
  {
    name: "realization-3.jpg",
    size: "1024x1024",
    prompt:
      "Outdoor birthday garden party reception with white round tables, gold Chiavari chairs, colorful floral decorations and string lights at dusk, festive elegant atmosphere, photorealistic, high quality",
  },
  {
    name: "realization-4.jpg",
    size: "1024x1024",
    prompt:
      "Large community public event with multiple white tents, crowds of people, food stalls and stage in an open field during the day, photorealistic, high quality aerial view",
  },
  {
    name: "banner-aerial.jpg",
    size: "1536x640",
    prompt:
      "Wide aerial drone view of a vast outdoor event grounds with many white tents and chapiteaux of different sizes arranged across a green landscape, daytime, photorealistic, cinematic, high quality, ultra wide landscape",
  },
  {
    name: "inspiration-1.jpg",
    size: "1024x1024",
    prompt:
      "Stylish outdoor wedding reception under white tent with elegant table settings, gold chairs and warm string lights at dusk, photorealistic, high quality",
  },
  {
    name: "inspiration-2.jpg",
    size: "1024x1024",
    prompt:
      "Elegant corporate gala dinner setup with round tables, white chairs, stage and uplighting inside a large marquee, photorealistic, high quality",
  },
  {
    name: "inspiration-3.jpg",
    size: "1024x1024",
    prompt:
      "Traditional Ghanaian celebration ceremony with white chairs, colorful decorations and tents outdoors, vibrant festive atmosphere, photorealistic, high quality",
  },
  {
    name: "cta-bg.jpg",
    size: "1536x640",
    prompt:
      "Dark moody background of an elegant evening event with tents softly glowing with warm light, deep navy blue tones, abstract atmospheric, photorealistic, high quality, wide landscape",
  },
];

async function run() {
  const zai = await ZAI.create();
  let done = 0;
  for (const job of jobs) {
    const outPath = path.join(OUT, job.name);
    if (fs.existsSync(outPath)) {
      console.log(`[skip] ${job.name} exists`);
      done++;
      continue;
    }
    try {
      console.log(`[gen] ${job.name} (${job.size}) ...`);
      const res = await zai.images.generations.create({
        prompt: job.prompt,
        size: job.size as any,
      });
      const b64 = res.data[0].base64;
      fs.writeFileSync(outPath, Buffer.from(b64, "base64"));
      done++;
      console.log(`[ok]  ${job.name} (${done}/${jobs.length})`);
    } catch (e: any) {
      console.error(`[err] ${job.name}: ${e?.message || e}`);
    }
  }
  console.log(`FINISHED ${done}/${jobs.length}`);
}

run();
