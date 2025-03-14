import { classNames } from './classNames';

describe('classNames', () => {
  test('с одним параметром', () => {
    expect(classNames('someClass')).toBe('someClass');
  });

  test('с дополнительными классами', () => {
    const expected = 'someClass class1 class2';
    expect(classNames('someClass', {}, ['class1', 'class2'])).toBe(expected);
  });

  test('с модификаторами', () => {
    const expected = 'someClass hovered';
    expect(classNames('someClass', { hovered: true, scrollable: false })).toBe(
      expected
    );
  });

  test('с модификаторами и дополнительными классами', () => {
    const expected = 'someClass class1 class2 hovered scrollable';
    expect(
      classNames('someClass', { hovered: true, scrollable: true }, [
        'class1',
        'class2',
      ])
    ).toBe(expected);
  });

  test('фильтрует falsy значения в дополнительных классах', () => {
    const expected = 'someClass class1 class2';
    expect(
      classNames('someClass', {}, ['class1', undefined, null, '', 'class2'])
    ).toBe(expected);
  });

  test('работает со строковыми значениями в mods', () => {
    const expected = 'someClass hovered';
    expect(classNames('someClass', { hovered: 'yes', scrollable: '' })).toBe(
      expected
    );
  });

  test('работает с пустыми параметрами', () => {
    expect(classNames('')).toBe('');
    expect(classNames('', {}, [])).toBe('');
  });

  test('правильно обрабатывает сложные случаи', () => {
    const expected = 'btn primary size_l disabled';
    expect(
      classNames(
        'btn',
        {
          primary: true,
          secondary: false,
          size_l: true,
          size_m: false,
          disabled: true,
        },
        []
      )
    ).toBe(expected);
  });
});
