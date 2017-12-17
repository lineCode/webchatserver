var express = require('express')
var router = express.Router()
var chat = require('../chat/chat')

/* GET users listing. */
router.get(
  '/',
  (req, res, next) => {
    res.json(chat)
  }
)

router.post(
  '/login/attempt',
  (req, res, next) => {
    console.log('Login attempt: ', req.body.id)

    if (chat.users[req.body.id] === undefined) {
      res.status(200).json({ result: "Available" })
    } else {
      res.status(403).json({ result: "Already logged in" })
    }
  }
)

router.post(
  '/login',
  (req, res, next) => {
    console.log('login: ', req.body)
    
    if (chat.users[req.body.id] !== undefined) {
      res.status(403).json({ result: "Already logged in" })
    } else {
      chat.users[req.body.id] = { firstName: req.body.firstName, lastName: req.body.lastName, lastMessage: "" }
      req.session.userId = req.body.id

      let response = {}
      Object.assign(response, chat)
      delete response.users[req.body.id]

      res.status(200).json({ result: "Authenticated", chat: response })
    }
  }
)

router.post(
  '/logout',
  (req, res, next) => {
    if (req.session.userId) {
      delete chat.users[req.session.userId]
      req.session.userId = null
      res.status(200).json({ result: "Logged out" })
    } else {
      res.status(403).json({ result: "Unauthorized" })
    }
  }
)

module.exports = router
