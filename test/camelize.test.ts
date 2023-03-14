import camelize from '../src/camelize';


describe('camelize function', () => {
  it('should convert hyphenated string to camel case', () => {
    expect(camelize('foo-bar')).toEqual('fooBar');
  });

  it('should convert underscored string to camel case', () => {
    expect(camelize('hello_world')).toEqual('helloWorld');
  });

  it('should convert spaced string to camel case', () => {
    expect(camelize('my variable_name')).toEqual('myVariableName');
  });

  it('should handle empty string', () => {
    expect(camelize('')).toEqual('');
  });

});