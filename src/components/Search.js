import React, {
    Component,
    Fragment
} from 'react'
import {
    Input
} from 'antd';

const SearchInput = Input.Search;

class Search extends Component {

    constructor(props) {
        super(props)
        this.myInput = React.createRef();
    }

    handleClick(value) {
        console.log(value)
    }

    render() {
        return (
            <Fragment>
                 <SearchInput placeholder="search text" enterButton="Search" onSearch={ this.handleClick.bind(this.value) }
                        />
            </Fragment>
        )
    }
}

export default Search