const chai = require('chai')
const expect = chai.expect;
const chaiHttp = require('chai-http');
const app = require('../bin/www')
const Article = require('../models/article.model')

chai.use(chaiHttp)

describe(`DISPLAY ARTICLE /article`, () => {
  it(`should list ALL ARTICLE on /arcile GET`, (done) => {
    chai.request('http://localhost:3000')
    .get('/article')
    .end((err,res) => {
      console.log(res.body);
      expect(res).to.have.status(200)
      expect(res.body.articles[0]).to.ownProperty('title')
      expect(res.body.articles[0]).to.ownProperty('text')
      expect(res.body.articles[0].title).to.be.a('string')
      expect(res.body.articles[0].text).to.be.a('string')
      done()
    })
  })
})

describe(`ADD ARTICLE /article`, () => {
  it(`should ADD AN ARTICLE on /article POST`, (done) => {
    chai.request('http://localhost:3000')
    .post('/article')
    .send({
      title : 'When in Rome',
      text  : 'Looking for pisa lean tower'
    })
    .end((err,res) => {
      console.log(res.body);
      expect(res).to.have.status(201)
      expect(res.body.newArticle).to.ownProperty('title')
      expect(res.body.newArticle).to.ownProperty('text')
      expect(res.body.newArticle.title).to.be.a('string')
      expect(res.body.newArticle.text).to.be.a('string')
      expect(res.body.message).to.eql('Add article success')
      done()
    })
  })
})

describe(`UPDATE ARTICLE /article`, () => {
  it(`should UPDATE AN ARTICLE on /article PUT`, (done) => {
    Article.find()
    .exec()
    .then(articles => {
      console.log(articles[0]._id,'<<<<<< this is it');
      let _id = articles[0]._id
      chai.request('http://localhost:3000/_id')
      .put('/article')
      .send({
        $set:{
        title : 'When in Rome',
        text  : 'Looking for pisa lean tower'
      }
    })
      .end((err,res) => {
        console.log(res.body,'<<<<<<<<<');
        // expect(res).to.have.status(201)
        // expect(res.body.newArticle).to.ownProperty('title')
        // expect(res.body.newArticle).to.ownProperty('text')
        // expect(res.body.newArticle.title).to.be.a('string')
        // expect(res.body.newArticle.text).to.be.a('string')
        // expect(res.body.message).to.eql('Add article success')
        done()
      })
    })
  })
})