

  1.React和vue选型和优缺点、核心架构的区别

  2.React中setState的执行机制，如何有效的管理状态

  3.React的事件底层实现机制

  4.React的虚拟DOM和Diff算法的内部实现

  5.React的Fiber工作原理，解决了什么问题

  6.ReactRouter和VueRouter的底层实现原理、动态加载实现原理

  7.可熟练应用ReactAPI、生命周期等，可应用HOC、render props、Hooks等高阶用法解决问题

  8.基于React的特性和原理，可以手动实现一个简单的React

  9.React的性能优化手段

  10.mobx-react如何驱动react组件重渲染

  11.forceUpdate经历了哪些生命周期，子组件呢

  12.列表使用index做key，删除其中一个后，如何表现

  13.hooks

setState:

  1.React 中 setState 什么时候是同步的，什么时候是异步的

  2.React中setState的执行机制，如何有效的管理状态

  3.输出值
  class Example extends React.Component {
  constructor() {
    super();
    this.state = {
      val: 0
    };
  }
  componentDidMount() {
    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 1 次 log

    this.setState({val: this.state.val + 1});
    console.log(this.state.val);    // 第 2 次 log

    setTimeout(() => {
      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 3 次 log

      this.setState({val: this.state.val + 1});
      console.log(this.state.val);  // 第 4 次 log
    }, 0);
  }

  render() {
    return null;
  }
};

react-router:

1.react-router 里的 <Link> 标签和 <a> 标签有什么区别
