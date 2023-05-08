import AnchorLink from "react-anchor-link-smooth-scroll"

type Props = {
    pageName: string
    selectedPage: string
    setSelectedPage: (value: string) => void
}

export function Link({ pageName, selectedPage, setSelectedPage }: Props) {

    const pageRouteStr = (pageName === 'home') ? '' : pageName.replace(/ /g, "")
    const fontStyle = (selectedPage === pageName) ? 'text-primary-500' : ''

    return <AnchorLink
        href={'#/' + pageRouteStr}
        onClick={()=> setSelectedPage(pageRouteStr)}
        className={`${fontStyle} transition duration-100 hover:text-primary-300 capitalize cursor-pointer`}>
        {pageName}
    </AnchorLink>
}