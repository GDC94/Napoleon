import Link from 'next/link'

function Header() {
  return (
    <div>
      <div className="h-2 bg-blacksoft"></div>
      <header className="bg-black ">
        <div className=" mx-auto flex max-w-6xl justify-between p-5 ">
          <div className="flex items-center space-x-2">
            <Link href="/">
              <img
                className="w-16 cursor-pointer object-contain"
                src={'/images/escudo.png'}
                alt=""
              />
            </Link>
            <div className="flex flex-col">
              <h3 className="lg:text-4xl sm:text-3xl xs:text-2xl font-medium  text-white">Napoleón</h3>
              <h3 className="text-sm text-gray ">
                El blog de noticias sobre River Plate 🐔
              </h3>
             
            </div>
          </div>
          <div className="text-green-600 flex items-center space-x-1.5 flex-col justify-center ">
            <h3 className="text-1xl font-medium  text-white">Iniciar sesión</h3>
            <Link href="https://login.riverid.com.ar/Account/Login?ReturnUrl=%2Fconnect%2Fauthorize%2Fcallback%3Fclient_id%3Dmiportal%26redirect_uri%3Dhttps%253A%252F%252Fwww.riverid.com.ar%252Fsignin-oidc%26response_type%3Dcode%26scope%3Dopenid%2520profile%2520openid%2520profile%26code_challenge%3DnqB8_kt3-s94Nmd2qApbjRmvqv4OE7UJsTdPj3SRWuk%26code_challenge_method%3DS256%26response_mode%3Dform_post%26nonce%3D637844471272444390.ZDcxZmUxOGUtZjYxYS00ZTk0LTg2YzUtOWE3NDQ2ZTdjY2I4OTNkM2RjM2UtMzE5YS00ZGQ4LWE1MzYtOGU5OGExMDQ4ODBh%26state%3DCfDJ8Fstisnj_fVEnXFsjrGWDTmuf3UbO5_tbwdzC6Plyf6DTLPjtUYnxd6kGUZMXOBhIeIf2k08WN0nhsDfAiYBRp8WcJawQ4wGGfHeWOf_YySQ4Wh3LsakPmDHu73XbibJjhBESGCuS47hkIHg2Nh89tpI90v2oKnzrokQS-t8WZZHMD2PDN8Eoq741JTmhicXQfTR218en-kyitv8hkwZGUSQ7cBq83mFJ_dnXRACEYz8iwLFjP-IOWPti-jR3s047hsRpKNaZfyjJgMWaMNrKDAsNRAd1jiISiOI_BJEyoS_jNnghV9xHVh127lkCr35lC6FMFUScKm47kAGAhOngIlVKjwpjbnDylLC8iv6rsLU2iFMxQznvm7uAQ7c_nzthw%26x-client-SKU%3DID_NETSTANDARD2_0%26x-client-ver%3D6.10.0.0">
              <img
                className="w-14 cursor-pointer object-contain"
                src={'/images/riverid.png'}
                alt=""
              />
            </Link>
          </div>
        </div>
      </header>
      <div className="h-1 bg-red"></div>
    </div>
  )
}

export default Header
