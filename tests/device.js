module.exports = {
	describe: {

	},
	id: 'aasdkfjhaskjdhf',
	current_state: '1',
	states: {
		'1': {
			transitions:{
				'2': {
					dependency: 'device_id2:machine_state3',
					fname: 'fun2'
				},
			}
		},
		'2':{
			transitions: {
				'1': {
					fname: 'fun1'
				},
				'3': {
					fname: 'fun3',
				}
			}
		},
		'3': {
			transitions: {
				'5': {
					fname: 'fun4'
				},
				'4': {
					fname: 'fun5'
				}
			}
		},
		'4': {
			transitions: {
				'8': {
					fname: 'fun7'
				}
			}
		},
		'5': {
			transitions: {
				'6': {
					fname: 'fun6',
				}
			}
		},
		'6': {
			transitions: {
				'7': {
					fname: 'fun10'
				}
			}
		},
		'7': {
			transitions: {
				'1': {
					fname: 'fun11'
				}
			}
		},
		'8': {
			transitions: {
				'4': {
					fname: 'fun8'
				},
				'9': {
					fname: 'fun9'
				}
			}
		},
		'9': {
			transitions: {
				'1': {
					fname: 'fun12'
				}
			}
		}
	}
}