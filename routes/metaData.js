var express = require('express');
var router = express.Router();

const phineasMetaDataURI = [
  {
    "name": "Phineas",
    "title": "Normal phineas",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Phineas_Flynn3_pqqjle.webp"
  },
  {
    "name": "Phineas",
    "title": "Smily Phineas",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Phineas_Flynn_z4xrau.webp"
  },
  {
    "name": "Phineas",
    "title": "Phineas with guitar",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Phineas_Flynn7_dki5oo.webp"
  },
  {
    "name": "Phineas",
    "title": "Phineas with mike",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Phineas_Flynn_18_jbpyko.webp"
  },
  {
    "name": "Phineas",
    "title": "Rockstar Phineas",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Phineas_Flynn2_vm98at.webp"
  }
]
const FerbDataURI = [
  {
    "name": "Ferb",
    "title": "Reading Ferb",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234370/NFT-images/Ferb_tree_oen3dk.webp"
  },
  {
    "name": "Ferb",
    "title": "Hand wrapped ferb",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234370/NFT-images/Ferb_Fletcher4_hcyctl.webp"
  },
  {
    "name": "Ferb",
    "title": "Ferb with jacket",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234370/NFT-images/Ferb6_ymqvea.webp"
  },
  {
    "name": "Ferb",
    "title": "Rockstar Ferb",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234369/NFT-images/Ferb_Fletcher_14_jvyxz5.webp"
  },
  {
    "name": "Ferb",
    "title": "Normal Ferb",
    "uri": "https://res.cloudinary.com/musicalide/image/upload/v1658234370/NFT-images/Ferb_tree_oen3dk.webp"
  }
]

router
  .get('/', (req, res) => {
    res.send("Don't just ask to ask");
  })
  .get('/phineas/:id', (req, res, next) => {
    return res.json(phineasMetaDataURI[req.params.id]);
  })
  .get('/ferb/:id', (req, res, next) => {
    return res.json(FerbDataURI[req.params.id]);
  })

module.exports = router;
