import createReactClass from 'create-react-class';
export const CustomControl = createReactClass({
  displayName: 'CustomControl',

  render () {
    const {
      value,
      placeholder,
      ...rest
    } = this.props;

    return <Button {...rest}>{value || placeholder}</Button>;
  },
});
