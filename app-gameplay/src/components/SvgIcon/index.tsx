import React from 'react'

import SvgUri from 'react-native-svg-uri'

type Props = {
    iconLink: string
    width: number
    height: number
}

const SvgIcon = ({iconLink, width, height} : Props) => {
    return (
        <SvgUri
            width= { width }
            height= { height }
            source= {{ uri:iconLink }}
        />
    )
}

export default SvgIcon;