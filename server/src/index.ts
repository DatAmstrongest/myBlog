import express, { Request, Response } from 'express';
import cors from 'cors';
import app from './app';

const PORT = process.env.PORT || 5000;


app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});