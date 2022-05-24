export const injectobject = {
  component: 'object',
  log(msg: string) {
    return console.log(
      ` component ${this.component} and  Object message: ${msg}`
    );
  },
};
