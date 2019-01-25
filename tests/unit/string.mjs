import { leftPad, capitalize, camelize } from '@/string';

describe('leftPad', () =>
{
    it('By default, returns "00"', () =>
        expect(leftPad()).toEqual('00'));
    it('Adds one (1) leading zeros to "2"', () =>
        expect(leftPad('2')).toEqual('02'));
    it('Adds zero (0) leading zeros to "10"', () =>
        expect(leftPad('10')).toEqual('10'));
});

describe('capitalize', () =>
{
    it('By default, returns ""', () =>
        expect(capitalize()).toEqual(''));
    it('Turns "hello" into "Hello"', () =>
        expect(capitalize('hello')).toEqual('Hello'));
});

describe('camelize', () =>
{
    it('By default, returns ""', () =>
        expect(camelize()).toEqual(''));
    it('Turns "hello-world" into "helloWorld"', () =>
        expect(camelize('hello-world')).toEqual('helloWorld'));
    it('Turns "hello.world" into "helloWorld"', () =>
        expect(camelize('hello.world', '.')).toEqual('helloWorld'));
});
