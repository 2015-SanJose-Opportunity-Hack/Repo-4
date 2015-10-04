angular
		.module('starter.controllers', [])

		.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

			// With the new view caching in Ionic, Controllers are only called
			// when they are recreated or on app start, instead of every page
			// change.
			// To listen for when this page is active (for example, to refresh
			// data),
			// listen for the $ionicView.enter event:
			// $scope.$on('$ionicView.enter', function(e) {
			// });

			// Form data for the login modal
			$scope.loginData = {};

			// Create the login modal that we will use later
			$ionicModal.fromTemplateUrl('templates/login.html', {
				scope : $scope
			}).then(function(modal) {
				$scope.modal = modal;
			});

			// Triggered in the login modal to close it
			$scope.closeLogin = function() {
				$scope.modal.hide();
			};

			// Open the login modal
			$scope.login = function() {
				$scope.modal.show();
			};

			// Perform the login action when the user submits the login form
			$scope.doLogin = function() {
				console.log('Doing login', $scope.loginData);

				// Simulate a login delay. Remove this and replace with your
				// login
				// code if using a login system
				$timeout(function() {
					$scope.closeLogin();
				}, 1000);
			};
		})

		.controller('PlaylistsCtrl', function($scope) {
			$scope.playlists = [ {
				title : 'Reggae',
				id : 1
			}, {
				title : 'Chill',
				id : 2
			}, {
				title : 'Dubstep',
				id : 3
			}, {
				title : 'Indie',
				id : 4
			}, {
				title : 'Rap',
				id : 5
			}, {
				title : 'Cowbell',
				id : 6
			} ];
		})

		.controller(
				'EvaluvationCtrl',
				function($scope) {
					// Arts
					$scope.artsinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 1.2 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Emerging</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Arts',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.artsfinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 2.2 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Arts',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};
					// Fine-Motor
					$scope.motoinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 3.4 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Fine-Motor',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.motofinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 4.7 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Fine-Motor',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};

					// Literature
					$scope.litinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 2 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Literacy',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.litfinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 3.4 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Profecient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Literacy',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};
					// Fine-Motor
					$scope.motoinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 4.2 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Fine-Motor',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 5,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.motofinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 4.6 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Fine-Motor',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 5,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};

					// Social
					$scope.socinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 2.7 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Developing</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Social/Emotional',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.socfinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 3.6 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Profecient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Social/Emotional',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};

					// Math - Probelm Solving
					$scope.mathinit = {
						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 1.5 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Emerging</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Math/Problem Solving',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false
					};

					$scope.mathfinal = {

						options : {
							chart : {
								type : 'solidgauge'
							},
							tooltip : {
								enabled : false
							},
							pane : {
								center : [ '50%', '85%' ],
								size : '140%',
								startAngle : -90,
								endAngle : 90,
								background : {
									backgroundColor : '#EEE',
									innerRadius : '60%',
									outerRadius : '100%',
									shape : 'arc'
								}
							},
							solidgauge : {
								dataLabels : {
									y : -30,
									borderWidth : 0,
									useHTML : true
								}
							}
						},
						series : [ {
							data : [ 3.8 ],
							dataLabels : {
								format : '<div style="text-align:center"><span style="font-size:25px;color:black">Proficient</span><br/>'
										+ '<span style="font-size:12px;color:silver">profiency</span></div>'
							}
						} ],
						title : {
							text : 'Math/Problem Solving',
							y : 50
						},
						yAxis : {
							currentMin : 0,
							currentMax : 4,
							title : {
								y : 140
							},
							stops : [ [ 0.1, '#DF5353' ], // red
							[ 0.5, '#DDDF0D' ], // yellow
							[ 0.9, '#55BF3B' ] // green
							],
							lineWidth : 0,
							tickInterval : 20,
							tickPixelInterval : 400,
							tickWidth : 0,
							labels : {
								y : 15
							}
						},
						loading : false

					};

				})

		.controller('PlaylistCtrl', function($scope, $stateParams) {
		});
