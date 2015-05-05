var initialLocation;

if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(showPosition);
  // also monitor position as it changes
  navigator.geolocation.watchPosition(showPosition);
}
function getCity( options, complete ) {
      
    var geocoder = new google.maps.Geocoder(),
        request;

    if( options.latitude ) {
        
        request= { 'latLng': new google.maps.LatLng( options.latitude, options.longitude ) };
      
    } else {
        
        request= { 'address': options.address };
        
    };
    
    geocoder.geocode( request, function( results, status ) {
            
        if ( status == google.maps.GeocoderStatus.OK ) {
            
            console.log( results );
            
            //check top-level results
            for( var resultIndex = 0; resultIndex < results.length; resultIndex++ ) {
              
                var types = results[resultIndex].types;
                
                for( var typeIndex = 0; typeIndex < types.length; typeIndex++ ) {
                
                    if( types[typeIndex] == 'locality' ) {
                        
                        complete( results[resultIndex].formatted_address );
                        return;
                        
                    };
                    
                };

            };
            
            //no result, check addresses
            for( var resultIndex = 0; resultIndex < results.length; resultIndex++ ) {
              
                var addresses = results[resultIndex].address_components;
                
                for( var addressIndex = 0; addressIndex < addresses.length; addressIndex++ ) {
                
                    var types = addresses[addressIndex].types;
                    
                    for( var typeIndex = 0; typeIndex < types.length; typeIndex++ ) {
                    
                        if( types[typeIndex] == 'locality' ) {
                            
                            complete( addresses[addressIndex].long_name );
                            return;
                            
                        };
                        
                    };
                    
                };
                
            };
            
        } else {
            
            console.log( 'error: ' + status );
            complete();
            
        };
            
    });
    
};

function showPosition(position) {
  
  
  var lat = position.coords.latitude;
  var lng = position.coords.longitude;
  
  var latitude = lat,
      longitude = lng;

    getCity( { latitude: latitude, longitude: longitude }, function ( city ) {
alert(city);
 document.getElementById( 'location' ).textContent = city;
        
    } );
  
}



​