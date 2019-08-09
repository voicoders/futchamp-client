const actionTypes = {

};

const registerActionTypes = ( constants ) => {
	const registeredConstants = {};
	const pending = '_PENDING';
	const fulfilled = '_FULFILLED';
	const rejected = '_REJECTED';

	for ( const prop in constants ) {
		if ( constants.hasOwnProperty( prop ) ) {
			registeredConstants[prop] = {};

			for ( const constant of constants[prop] ) {
				const newConstant = {};
				newConstant.type = constant;
				newConstant.pending = `${constant}${pending}`;
				newConstant.fulfilled = `${constant}${fulfilled}`;
				newConstant.rejected = `${constant}${rejected}`;

				registeredConstants[prop][constant] = newConstant;
			}
		}
	}

	return registeredConstants;
};

export default registerActionTypes( actionTypes );
