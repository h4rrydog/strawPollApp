/*
 * GET home page.
 */

// in memory store
// TODO: replace in memory data store with persistent storage
var pollData = {
    north: {
        participation: {
            yes: 0,
            no: 0
        },
        candidates: [
            {
                party: 'puppies',
                name: 'Alpha Puppy',
                votes: 0
            },
            {
                party: 'kittens',
                name: 'Bravo Kitten',
                votes: 0
            },
            {
                party: 'bunnies',
                name: 'Charlie Bunny',
                votes: 0
            }
        ]
    },
    south: {
        participation: {
            yes: 0,
            no: 0
        },
        candidates: [
            {
                party: 'puppies',
                name: 'Delta Puppy',
                votes: 0
            },
            {
                party: 'kittens',
                name: 'Echo Kitten',
                votes: 0
            },
            {
                party: 'bunnies',
                name: 'Foxtrot Bunny',
                votes: 0
            },
            {
                party: 'independent',
                name: 'Golf Independent',
                votes: 0
            },
            {
                party: 'independent',
                name: 'Hotel Independent',
                votes: 0
            },
            {
                party: 'independent',
                name: 'Juliet Independent',
                votes: 0
            }
        ]
    }
};

// TODO: Generate parties variable programmatically
var nationalPoll = {
    'puppies': 0,
    'kittens': 0,
    'bunnies': 0,
    'independent': 0
};

// TODO: Generate constituencies programmatically
var constituencies = [
    'north',
    'south'
];

exports.index = function (req, res) {
    res.render('index', {
        title: 'MySociety Straw Poll',
        constituencies: constituencies
    });
};

exports.vote = function (req, res) {
    var voting = req.body.voting,
        constituency = req.body.constituency;

    console.log('User is voting? ' + voting);
    console.log('User is in constituency ' + constituency);

    // tally isVoting? response in data store
    pollData[constituency]['participation'][voting] += 1;
    console.log(JSON.stringify(pollData));

    // fork - are they voting or not?
    // YES -> poll form
    // NO -> results page
    if (voting === 'yes') {

        // setup candidates array for voting form
        var candidates = pollData[constituency]['candidates'];
        console.log(candidates.length + ' candidates in constituency ' + constituency);

        res.render('poll', {
            title: 'MySociety Straw Poll - informal poll',
            candidates: candidates,
            constituency: constituency
        });

    } else {
        res.render('results', {
            title: 'MySociety Straw Poll - poll results',
            constituency: constituency
        });
    }
};

exports.results = function (req, res) {

    res.render('results', {
        title: 'MySociety Straw Poll - poll results'
    });
};
