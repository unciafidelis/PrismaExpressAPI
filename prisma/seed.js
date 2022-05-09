const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

(async function main() {
  try {
    const woopa = await prisma.explorer.upsert({
      where: { name: 'Woopa' },
      update: {},
      create: {
        name: 'Woopa',
				username: 'ajolonauta',
				mission: 'Node'
      },
    });

    const woopa1 = await prisma.explorer.upsert({
      where: { name: 'Woopa1' },
      update: {},
      create: {
        name: 'Woopa1',
				username: 'ajolonauta1',
				mission: 'Node'
      },
    });

    const woopa2 = await prisma.explorer.upsert({
      where: { name: 'Woopa 2' },
      update: {},
      create: {
        name: 'Woopa 2',
				username: 'ajolonauta2',
				mission: 'Java'
      },
    });

    const woopa3 = await prisma.explorer.upsert({
      where: { name: 'Woopa 3' },
      update: {},
      create: {
        name: 'Woopa 3',
				username: 'ajolonauta3',
				mission: 'Node'
      },
    });

    console.log('Create 3 explorers');
  
    const MC = await prisma.MissionCommander.upsert({
        where: { name: 'MissionCommander' },
        update: {},
        create: {
          name: 'MissionCommander',
                lang: 'Woopa',
                missionCommander: 'MC',
                enrollments: 0,
                hasCertification: false
        },
      });
      const MC1 = await prisma.MissionCommander.upsert({
        where: { name: 'MissionCommander1' },
        update: {},
        create: {
                name: 'MissionCommander1',
                lang: 'WoopanoParlante',
                missionCommander: 'Carlo',
                enrollments: 3,
                hasCertification: true

        },
      });
  
      const MC2 = await prisma.MissionCommander.upsert({
        where: { name: 'MissionCommander2' },
        update: {},
        create: {
            name: 'MissionCommander2',
            lang: 'twitcher',
            missionCommander: 'Fer',
            enrollments: 2,
            hasCertification: true
        },
      });
  
      const MC3 = await prisma.MissionCommander.upsert({
        where: { name: 'MissionCommander3' },
        update: {},
        create: {
            name: 'MissionCommander3',
            lang: 'Dobelerio',
            missionCommander: 'Romarpla',
            enrollments: 1,
            hasCertification: true
        },
      });
        const MCX = await prisma.missionCommanderX.upsert({
          where: { name: 'Will' },
          update: {},
          create: {
            name: "Will",
            username: "Woopanaitor",
            mainStack: "java",
            currentEnrollment: true,
            hasAzureCertification: true 
          },
        });
        const MCX1 = await prisma.missionCommanderX.upsert({
          where: { name: 'Wall' },
          update: {},
          create: {
            name: "Wall",
            username: "Woopan",
            mainStack: "node",
            currentEnrollment: true,
            hasAzureCertification: false 
  
          },
        });
    
        const MCX2 = await prisma.missionCommanderX.upsert({
          where: { name: 'Woll' },
          update: {},
          create: {
            name: "Woll",
            username: "theTwitcher",
            mainStack: "java",
            currentEnrollment: true,
            hasAzureCertification: true 
          },
        });
    
        const MCX3 = await prisma.missionCommanderX.upsert({
          where: { name: 'Juan' },
          update: {},
          create: {
            name: "Juan",
            username: "PerX",
            mainStack: "node",
            currentEnrollment: false,
            hasAzureCertification: false 
          },
      });
      console.log('Create 3 Mission Commanders X');
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();