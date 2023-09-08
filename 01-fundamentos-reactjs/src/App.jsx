import { Header } from './components/Header'
import { Post } from './Post'
import './styles.css'

export function App() {
  return (
    <div>
      <Header/>
      <Post
        author="Grazielle"
        content="lorem ipsum"
      />
      <Post
        author="Amanda"
        content="Um novo post"
      />
    </div>
  )
}
