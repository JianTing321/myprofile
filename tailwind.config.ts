import type { Config } from 'tailwindcss'

export default <Partial<Config>>{
  theme: {
    // 自訂義顏色 名稱也可自定義(需要重新build顏色才會套用)
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        blue: {
          light: '#85d7ff',
          DEFAULT: '#1fb6ff',
          dark: '#009eeb'
        },
        pink: {
          light: '#ff7ce5',
          DEFAULT: '#ff49db',
          dark: '#ff16d1'
        },
        myGray: {
          darkest: '#1f2d3d',
          dark: '#3c4858',
          DEFAULT: '#c0ccda',
          light: '#e0e6ed',
          lightest: '#f9fafc'
        }
      }
    }
  }
}