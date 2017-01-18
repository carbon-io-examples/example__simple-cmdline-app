var carbon = require('carbon-io')
var o      = carbon.atom.o(module).main    // Note the .main here since this is the main application 
var __     = carbon.fibers.__(module).main // Note the .main here since this is the main application 

/***************************************************************************************************
 * RollDice
 *
 * A simple cmdline program for rolling dice.
 */
__(function() {
  module.exports = o({

    /***************************************************************************
     * _type
     */
    _type: Object,
    
    /***************************************************************************
     * description
     */
    description: "Roll dice.",

    /***************************************************************************
     * verbose
     */
    verbose: false,

    /***************************************************************************
     * cmdargs
     */
    cmdargs: {
      sides: {
        abbr: "s",
        help: "The number of sides each die should have.",
        required: false,
        default: 6
      },
      num: {
        abbr: "n",
        flag: false,
        position: 0,
        help: "The number of dice to roll.",
        required: false,
        default: 1
      },
      verbose: {
        abbr: "v",
        flag: true,
        help: "Log verbose output.",
        required: false,
        property: true // Will result in this.verbose having the value passed at the cmdline
      },
    },

    /***************************************************************************
     * _main
     */
    _main: function(args) {
      if (this.verbose) {
        console.log("Here is the input")
        console.log(args)
        console.log("Ok... rolling.......")
      }

      var numDice = args.num
      var numSides = args.sides
      var result = []
      for (var i = 0; i < numDice; i++) {
        result.push(Math.floor(Math.random() * numSides + 1)) // Random integer between 1 and numSides
      }
      
      console.log(result)
    }

  })
})
    
