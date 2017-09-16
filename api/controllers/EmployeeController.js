/**
 * EmployeeController
 *
 * @description :: Server-side logic for managing Employees
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

  /*SEND IN THIS WAY
        {
        "employee":{
    	"fullname": "juanito",
       "emailid": "xyz@abc.com",
       "phonenumber": "0000010000"
   	
     }
}      
         */

    add: function (req, res) {
      

        employee = req.param('employee');

        Employee.create(employee).exec(function (err, result) {

            if (err) {

                sails.log.debug('Some error occured ' + err);

                return res.json(500, { error: 'Some error occured' });

            }

            sails.log.debug('Success', JSON.stringify(result));

            return res.json(200, { success: 'Success', added: result });

        });

    }

};

