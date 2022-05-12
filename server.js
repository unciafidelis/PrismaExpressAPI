const express = require('express');
const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Require para usar Prisma
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// cors
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:8081"
}

app.use(cors(corsOptions))

/*
app.get('/', (req, res) => {
  res.json({message: 'alive'});
});
*/
app.listen(port, () => {
  console.log(`Listening to requests on port ${port}`);
});

app.get('/explorers', async (req, res) => {
    const allExplorers =  await prisma.explorer.findMany({});
    res.json(allExplorers);
  });

app.get('/explorers/:id', async (req, res) => {
    const id = req.params.id;
    const explorer = await prisma.explorer.findUnique({where: {id: parseInt(id)}});
    res.json(explorer);
  });

app.post('/explorers', async (req, res) => {
    const explorer = {
      name: req.body.name,
      username: req.body.username,
      mission: req.body.mission
     };
    const message = 'Explorer creado.';
    await prisma.explorer.create({data: explorer});
    return res.json({message});
  });

app.put('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.explorer.update({
		where: {
			id: id
		},
		data: {
			mission: req.body.mission
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/explorers/:id', async (req, res) => {
	const id = parseInt(req.params.id);
	await prisma.explorer.delete({where: {id: id}});
	return res.json({message: "Eliminado correctamente"});
});


//Mission Commanders 

app.get('/missioncommanders', async (req, res) => {
  const allMCs =  await prisma.MissionCommander.findMany({});
  res.json(allMCs);
});

app.get('/missioncommanders/:id', async (req, res) => {
  const id = req.params.id;
  const missioncommander = await prisma.MissionCommander.findUnique({where: {id: parseInt(id)}});
  res.json(missioncommander);
});

app.post('/missioncommanders', async (req, res) => {
  const mc = {
    name: req.body.name,
            lang: req.body.lang,
            missionCommander: req.body.missionCommander,
            enrollments: req.body.enrollments,
            hasCertification: req.body.hasCertification
   };
  const message = 'Mission Commander creado.';
  await prisma.MissionCommander.create({data: mc});
  return res.json({message});
});

app.put('/missioncommanders/:id', async (req, res) => {
const id = parseInt(req.params.id);

await prisma.MissionCommander.update({
  where: {
    id: id
  },
  data: {
    lang: req.body.lang
  }
})

return res.json({message: "Actualizado correctamente"});
});

app.delete('/missioncommanders/:id', async (req, res) => {
const id = parseInt(req.params.id);
await prisma.MissionCommander.delete({where: {id: id}});
return res.json({message: "Eliminado correctamente"});
});



// missionCommander - Nuevo Feature Fullstack

app.get('/mcx', async (req, res) => {
  const allMCXs =  await prisma.missionCommanderX.findMany({});
  res.json(allMCXs);
});

app.get('/mcx/:id', async (req, res) => {
  const id = req.params.id;
  const missioncommanderx = await prisma.missionCommanderX.findUnique({where: {id: parseInt(id)}});
  res.json(missioncommanderx);
});

app.post('/mcx', async (req, res) => {
  const mc = {
    name: req.body.name,
    username: req.body.username,
    mainStack: req.body.mainStack,
    currentEnrollment: req.body.currentEnrollment,
    hasAzureCertification: req.body.hasAzureCertification 
   };
  const message = 'Mission Commander creado.';
  await prisma.missionCommanderX.create({data: mc});
  return res.json({message});
});

app.put('/mcx/:id', async (req, res) => {
	const id = parseInt(req.params.id);

	await prisma.missionCommanderX.update({
		where: {
			id: id
		},
		data: {			
      mainStack: req.body.mainStack
		}
	})

	return res.json({message: "Actualizado correctamente"});
});

app.delete('/mcx/:id', async (req, res) => {
const id = parseInt(req.params.id);
await prisma.missionCommanderX.delete({where: {id: id}});
return res.json({message: "Eliminado correctamente"});
});