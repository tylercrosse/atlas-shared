"use strict";

(function(){
  angular
  .module("trips")
  .controller("TripShowController", [
    "TripFactory",
    "LocationFactory",
    "ProfileFactory",
    "$stateParams",
    TripShowControllerFunction
  ]);

  function TripShowControllerFunction(TripFactory, LocationFactory, ProfileFactory, $stateParams){
    this.profile = ProfileFactory.get({});
    this.trip = TripFactory.get({id: $stateParams.id});
    this.locations = LocationFactory.query({tripId: $stateParams.id});
    this.newLocation = new LocationFactory();
  }
}());
