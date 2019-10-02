export default self => {

    const onInputChange = function (propName) {

        return ({input, isValid}) => {
            this.setState({
                [propName] : isValid ? input : null
            })
        }
    }
    return onInputChange.bind(self)
}