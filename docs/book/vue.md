# :ferris_wheel: vue

#### vue中v-for的key有什么作用

1. Vue列表加key的目的是为diff算法添加标识，因为diff算法判断新旧VDOM是否相同的依据是节点的tag和key。如果tag和key相同则会进一步进行比较，使得尽可能多的节点进行复用。
2. 此外，key绑定的值一般是一个唯一的值，比如id。如果绑定数组的索引index，则起不到优化diff算法的作用，因为一旦数组内元素进行增删，后续节点的绑定的key也会发生变化，导致diff进行多余的更新操作。
   
