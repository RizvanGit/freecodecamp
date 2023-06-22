import ReactDOMServer from 'react-dom/server';
import React from 'react'
interface IProps {
    props?: ''
}
class ServerRenderComponent extends React.Component<IProps> {
    constructor(props: IProps) {
        super(props)
    }
    render() {
        return <div>Rendered on server</div>
    }
}
ReactDOMServer.renderToString(<ServerRenderComponent />)
export default ServerRenderComponent