import React from 'react'

export type TransRenderProps = {
  translation: React.ReactNode
  children: React.ReactNode
  message?: string | null
}

export type TransRenderCallbackOrComponent =
  | {
      component?: undefined
      render?: (props: TransRenderProps) => React.ReactElement<any, any> | null
    }
  | {
      component?: React.ComponentType<TransRenderProps> | null
      render?: undefined
    }

export type TransProps = {
  message?: string
  values?: Record<string, unknown>
  components?: { [key: string]: React.ElementType | any }
  formats?: Record<string, unknown>
  comment?: string
  children?: React.ReactNode
} & TransRenderCallbackOrComponent

export function Trans(props: TransProps): React.ReactElement<any, any> | null {
  return props.children as unknown as React.ReactElement<any, any>
}
