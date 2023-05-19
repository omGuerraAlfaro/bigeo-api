// import { Request, Response } from 'express';
// import { getRepository } from 'typeorm';
// import { Track } from './Track';

// export const trackController = {
//   async create(req: Request, res: Response) {
//     try {
//       const repository = getRepository(Track);
//       const track = repository.create(req.body);
//       await repository.save(track);
//       res.status(201).json(track);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     }
//   },

//   async findById(req: Request, res: Response) {
//     try {
//       const repository = getRepository(Track);
//       const track = await repository.findOne(req.params.id);
//       if (!track) {
//         res.status(404).send('Track not found');
//         return;
//       }
//       res.json(track);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     }
//   },

//   async update(req: Request, res: Response) {
//     try {
//       const repository = getRepository(Track);
//       const track = await repository.findOne(req.params.id);
//       if (!track) {
//         res.status(404).send('Track not found');
//         return;
//       }
//       repository.merge(track, req.body);
//       await repository.save(track);
//       res.json(track);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     }
//   },

//   async delete(req: Request, res: Response) {
//     try {
//       const repository = getRepository(Track);
//       const track = await repository.findOne(req.params.id);
//       if (!track) {
//         res.status(404).send('Track not found');
//         return;
//       }
//       await repository.remove(track);
//       res.sendStatus(204);
//     } catch (err) {
//       console.error(err);
//       res.status(500).send('Internal server error');
//     }
//   },
// };
