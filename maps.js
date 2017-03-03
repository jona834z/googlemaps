     function initMap() {
            var myLatLng = {
                lat: 62.154389
                , lng: -7.152572
            };

            var myLatLng2 = {
                lat: 62.155071
                , lng: -7.178579
            };

            var map = new google.maps.Map(document.getElementById('map'), {
                zoom: 15
                , center: myLatLng
            });

            var marker = new google.maps.Marker({
                position: myLatLng
                , map: map
                , title: 'vestmanna'
                    // icon: "heart.png"

                , animation: google.maps.Animation.DROP
            , });

            var marker2 = new google.maps.Marker({
                position: myLatLng2
                , map: map
                , title: 'heima'
            });

            map.addListener('center_changed', function () {
                // 3 seconds after the center of the map has changed, pan back to the
                // marker.
                window.setTimeout(function () {
                    map.panTo(marker.getPosition());
                }, 3000);
            });

            marker.addListener('click', function () {
                map.setZoom(19);
                map.setCenter(marker.getPosition());
                infoWindow.open(map, marker);
            });

            marker2.addListener('click', function () {
                map.setZoom(19);
                map.setCenter(marker2.getPosition());
                window.alert("klik2")
            });

            infoWindow.setContent({

            })

            var infoWindow = new google.maps.InfoWindow({
                content: "<h1> hej daniel </h1> <br> <h2> her bor jeg </h2>"
            })
        }

 async defer src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCipVdjphvsWwST4_MPGcdPMpxrETvlVmk&callback=initMap"
