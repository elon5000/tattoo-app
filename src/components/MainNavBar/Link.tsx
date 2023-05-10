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
    const fontStyle = (selectedPage === pageName) ? 'text-primary-500' : ''

    return <AnchorLink
        href={'#/' + pageRouteStr}
        onClick={() => setSelectedPage(pageRouteStr)}
        className={`${fontStyle} transition duration-100 hover:text-primary-300 capitalize cursor-pointer`}>
        {pageName}
    </AnchorLink>
}