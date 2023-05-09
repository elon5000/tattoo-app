import AnchorLink from "react-anchor-link-smooth-scroll"

// * Types
import { SelectedPage } from '../../shared/types'

type Props = {
    pageName: SelectedPage
    selectedPage: SelectedPage
    setSelectedPage: (value: SelectedPage) => void
}

export function Link({ pageName, selectedPage, setSelectedPage }: Props) {

    // const pageRouteStr = (pageName === 'home') ? '' : pageName.replace(/ /g, "")
    const pageRouteStr = pageName.replace(/ /g, "")
    const fontStyle = (selectedPage === pageName) ? 'text-primary-500' : ''

    return <AnchorLink
        href={'#/' + pageRouteStr}
        onClick={() => setSelectedPage(pageName)}
        className={`${fontStyle} transition duration-100 hover:text-primary-300 capitalize cursor-pointer`}>
        {pageName}
    </AnchorLink>
}