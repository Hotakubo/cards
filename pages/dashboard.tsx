import type { NextPage } from 'next'
import Labels from '@/components/Labels'
import Cards from '@/components/Cards'

const Dashboard: NextPage = () => {
  return (
    <div>
      <Labels></Labels>
      <Cards></Cards>
    </div>
  )
}

export default Dashboard
