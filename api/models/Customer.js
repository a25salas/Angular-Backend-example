/**
 * Customer.js
 *
 * @description :: TODO: You might write a short summary of how this model works and what it represents here.
 * @docs        :: http://sailsjs.org/documentation/concepts/models-and-orm/models
 */

module.exports = {
  autoCreatedAt: false,
  autoUpdatedAt: false,
  connection: 'mysql',
   attributes: {
     id: {

      type: 'integer',

      columnName: 'custom_id',

      primaryKey: true,

      autoIncrement: true

    },
  	name: {
  		type: 'string',
  	},

  	store: {
  		model: 'Store'
  	}

  }
};

