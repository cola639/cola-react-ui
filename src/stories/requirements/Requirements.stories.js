import { storiesOf } from '@storybook/react'
import { RequirementsTemplate } from '../../components/Requirements'

const stories = storiesOf('App Hello', module)

stories.add('Hello', () => {
  return <RequirementsTemplate />
})
