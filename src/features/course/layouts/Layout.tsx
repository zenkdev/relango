import { Test } from '../../../models';
import Article from './Article';
import List from './List';

interface LayoutProps {
  test: Test;
}

function Layout({ test }: LayoutProps) {
  switch (test.layout) {
    case 'article':
      return <Article testId={test.id} items={test.items} columns={test.columns} />;
    case 'list':
      return <List testId={test.id} items={test.items} columns={test.columns} start={test.listStart} />;
    default:
      return null;
  }
}

export default Layout;
