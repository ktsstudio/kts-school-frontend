import * as React from 'react';

type Props = {
  title: any;
}

class Button extends React.Component<any, any> {
  a = 'b';

  constructor(props: any) {
    super(props);
  }

  render() {
    return <button>{this.a}</button>;
  }
}
export default Button;
