import express from 'express';
import nodemailer from 'nodemailer';
import { NodeMailerMailAdapter } from './adapters/nodemailer/nodemailer-mail-adapter';
import { SubmitFeedbackUseCase } from './use-cases/submit-feedback-use-case';
import { PrismaFeedbacksRepository } from './repositories/prisma/prisma-feedbacks-repository'


export const routes = express.Router();


routes.post('/feedbacks', async (req, res) => {

  const { type, comment, screenshot } = req.body

  const prismaFeebacksRepository = new PrismaFeedbacksRepository()
  const nodemailerMailAdapter = new NodeMailerMailAdapter()


  const submitFeedbackUseCase = new SubmitFeedbackUseCase(
    prismaFeebacksRepository,
    nodemailerMailAdapter
  ) 

  await submitFeedbackUseCase.execute({
    type,
    comment,
    screenshot
  })

  return res.status(201).send()
})