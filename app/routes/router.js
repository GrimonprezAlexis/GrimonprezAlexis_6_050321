const cors = require('cors');
const FisheyeDataFR = require('../../data/FisheyeDataFR.json');

module.exports = (router) => {

    router.get('/customers', cors(), (req, res) => {
        const customers = [
            { id: 1, firstName: 'Alexis', lastName: 'Grz' },
            { id: 2, firstName: 'John', lastName: 'Doe' },
            { id: 3, firstName: 'Steve', lastName: 'Smith' }
        ];

        res.json(customers);
    });

    //Return all photographers
    router.get('/photographers', cors(), (req, res, next) => {
        res.send(FisheyeDataFR.photographes);
    });


    //Return all tags rather than photographers for build <TagsNavigation></TagsNavigation>
    router.get('/photographers/tags', cors(), (req, res, next) => {
        const photographersTags = [];
        FisheyeDataFR.photographes.forEach(photographer => {
            photographer.tags.forEach(tag => {
                if(photographersTags.indexOf(tag) === -1) {
                    photographersTags.push(tag);
                }
            });
        });
        res.send(JSON.stringify(photographersTags));
    });

    //http://localhost:5000/api/photographers/243
    router.get('/photographers/:id', cors(), (req, res, next) => {
        let photographer = FisheyeDataFR.photographes.filter((photographer) => { 
            return photographer.id == req.params.id;
        });
        res.send(photographer);
    })

    return router; // Return the router object to server


}