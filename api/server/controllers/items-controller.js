const itemsController = (ItemsModel) => {
  const get = (req, res) => {
    ItemsModel.find().exec()
    .then((items) => {
      res.json(items);
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  };

  const post = (req, res) => {
    if (!validateItem(req.body)) {
      res.send('Please provide a valid item');
    } else {
      ItemsModel.findOne({
        id: req.body.id,
      })
      .exec()
      .then((item) => {
        if (item) {
          res.send('Item already exists');
        } else {
          const itemEntry = new ItemsModel(req.body);
          itemEntry.save((err) => {
            if (err) {
              console.error(err);
            }
          })
          .then((item) => {
            res.json(item);
          })
          .catch((err) => {
            res.status(500).send(err);
          });
        }
      });
    }
  };

  const put = (req, res) => {
    if (!validateItem(req.body)) {
      res.send('Please provide a valid item');
    } else {
      ItemsModel.where({
        id: req.params.id,
      })
      .update(req.body, (err) => {
        if (err) {
          console.error(err);
          res.status(500).send(err);
        }

        res.json(req.body);
      });
    }
  };

  const httpDelete = (req, res) => {
    const params = {
      id: parseInt(req.params.id, 10)
    }
    ItemsModel.remove(params, () => (err) => {
      if (err) {
        console.error(err);
      }
    })
    .then((item) => {
      res.json({ id: item.id });
    })
    .catch((err) => {
      res.status(500).send(err);
    });
  }


  /*  Helper Functions
      ================================================================= */

  function validateItem(item) {
    return true;
  }

  return {
    get,
    post,
    put,
    httpDelete,
  };
};

module.exports = itemsController;
