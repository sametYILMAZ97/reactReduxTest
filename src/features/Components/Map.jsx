import { useEffect, useState } from 'react'
import { MapContainer, TileLayer, useMap, Polygon } from 'react-leaflet'

export default function Map({ mapZoomProp }) {
  const [mapZoom, setMapZoom] = useState(mapZoomProp) // Zoom butonları eklemiştim. Bu değeri değiştirerek zoom yapabilirsiniz.

  const mapCenter = [39.70741874485975, 37.04154403467671] // Google Maps ile koordinatları bulmuştum.

  // https://www.keene.edu/campus/maps/tool/ sitesinden çizim yapabilirsiniz ve koordinatları alabilirsiniz.
  // Unutmayın, koordinatları ters yazmalısınız.
  // Ve başlangıç ve bitiş noktası aynı olmalıdır.
  const multiPolygon = [
    [
      [37.0067596, 39.712601],
      [37.0007515, 39.6797122],
      [37.0656395, 39.6814297],
      [37.0586014, 39.7145818],
      [37.0067596, 39.712601],
    ],
  ]

  // enlem ve boylam sıralaması ters olmalı
  const reversedMultiPolygon = multiPolygon.map((polygon) =>
    polygon.map((point) => point.reverse())
  )

  // Alan renklendirme.
  const purpleOptions = { color: 'purple' }

  return (
    <MapContainer
      // Kesinlikle bir boyut sınırlandırması yapılmalı. Yoksa harita, kare kare tarayıcının içerisinde her yerde olmaya çalışıyor.
      style={{ height: '48rem', width: '48rem' }} // 48rem = 768px
      center={mapCenter} // Haritanın merkez koordinatları, robotun anlık koordinatları ile değiştirilebilirse (useState ile) harita hareket kazanabilir.
      zoom={mapZoom} // Butonlar ile arttırıp azaltılabilir.
      scrollWheelZoom={true}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" // Olmazsa olmazımız, harita için.
      />

      <Polygon
        pathOptions={purpleOptions}
        positions={reversedMultiPolygon} // Alanı çizdirmek için.
      />
    </MapContainer>
  )
}
