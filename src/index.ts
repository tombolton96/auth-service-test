'use strict';

import express from "express"
import bodyParser from "body-parser"
import dotenv from "dotenv"
import { router as authRouter } from "./auth.route"

const PORT = parseInt(process.env.PORT || "8080")
const HOST = '0.0.0.0'

const app = express()
dotenv.config()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/auth', authRouter)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})