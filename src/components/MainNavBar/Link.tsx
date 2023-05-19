import AnchorLink from "react-anchor-link-smooth-scroll"

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    pageName: string
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export function Link({ pageName, selectedPage, setSelectedPage }: Props) {

    const pageRouteStr = pageName.replace(/ /g, "") as SelectedPage
    const fontStyle = (selectedPage === pageName) ? 'text-red-100' : 'text-gray-100'
    const linkStyles = `${fontStyle} py-2 transition duration-100 hover:text-secondary-400 capitalize cursor-pointer`

    return <AnchorLink
        href={'#' + pageRouteStr}
        title={`Go to ${pageName}`}
        onClick={() => setSelectedPage(pageRouteStr)}
        className={linkStyles}>
        {pageName}
    </AnchorLink>
}