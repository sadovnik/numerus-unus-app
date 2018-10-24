import presentPoints from './presentPoints'

describe('#presentPoints', () => {
  it('puts thin spaces for every thousand', () => {
    expect(presentPoints(1000)).toEqual('1 000')
    expect(presentPoints(1001)).toEqual('1 001')
    expect(presentPoints(1000000)).toEqual('1 000 000')
    expect(presentPoints(23000000)).toEqual('23 000 000')
  })

  it('leaves numbers less than a thousand as is', () => {
    expect(presentPoints(6782)).toEqual('6 782')
    expect(presentPoints(100)).toEqual('100')
    expect(presentPoints(0)).toEqual('0')
  })
})
