package cn.wtu.etc11304.test;

import org.junit.Test;

import java.net.InetSocketAddress;
import java.nio.ByteBuffer;
import java.nio.channels.FileChannel;
import java.nio.channels.SocketChannel;
import java.nio.file.Paths;
import java.nio.file.StandardOpenOption;

public class BufferDemo {

    //测试buffer
    @Test
    public void test(){
        ByteBuffer bb = ByteBuffer.allocate(48);//为缓存申请容量大小为48
        /*向ByteBuffer中put数据的时候，一下四种形式都可以
         * put(byte b)
         * put(byte[] src)
         * put(byte[] src, int offset, int length)
         * put(ByteBuffer src)
         * 四种形式都会移动position指针
         */
        bb.put(new byte[]{1,2,4,2,-13});
        bb.flip(); //切换读写操作
        while(bb.hasRemaining()) {
            System.out.println(bb.get());
        }
    }

    //测试FileChannel
    @Test
    public void test2() throws Exception {
        /* 1.Channel是需要关闭的，所以这里用TWR方式确保Channel正确关闭
         * 2.鼓励大家用这种方法打开通道FileChannel.open(Path path, OpenOption... options)
         */
        FileChannel inChannel
                = FileChannel.open(Paths.get("C:\\Users\\ljiu\\Desktop\\me.txt"), StandardOpenOption.READ);
        FileChannel outChannel
                = FileChannel.open(Paths.get("C:\\Users\\ljiu\\Desktop\\channel.txt"), StandardOpenOption.WRITE);
        ByteBuffer buf = ByteBuffer.allocate(48);
        /*
         * 1.channel.write()和read()方法是需要移动position和limit指针的
         *      所以需要用buffer.flip()等方法，来保证读写正确
         * 2.channel.read()方法是从通道读取到缓冲区中，读取的字节数量是n (n是buffer中当前剩余的容量)，
         *      但是读取的数量是取决于通道的当前状态。例如：要读到文件末尾，不够buffer的容量也就是 通道剩余<=n,
         *      或者说ServerSocketChannel 当前只能读取准备好的，这很可能<n,所以说加循环，
         *      另外read的方法返回当前读取的数量，一个int 可以根据他来设定while
         *      如果返回-1，表示到了文件末尾
         */
        int bytesRead = inChannel.read(buf);
        while (bytesRead != -1) {
            buf.flip();
            /*
             *注意fileChannel.write()是在while循环中调用的。
             *因为无法保证write()方法一次能向FileChannel写入多少字节，
             *因此需要重复调用write()方法，直到Buffer中已经没有尚未写入通道的字节。
             */
            while (buf.hasRemaining()) {
                outChannel.write(buf);
            }
            buf.clear();
            bytesRead = inChannel.read(buf);
        }
    }

    //只将一个数据源通过通道转移到另一个通道的第二种做法
    @Test
    public void test3() throws Exception{
        FileChannel inChannel //FileChannel是阻塞的
                = FileChannel.open(Paths.get("C:\\Users\\ljiu\\Desktop\\me.txt"), StandardOpenOption.READ);
        FileChannel outChannel
                = FileChannel.open(Paths.get("C:\\Users\\ljiu\\Desktop\\channel2.txt"), StandardOpenOption.WRITE);
        outChannel.transferFrom(inChannel,0,inChannel.size());
        //以下方式也可
        //inChannel.transferTo(0, inChannel.size(), outChannel);
    }

    //测试SocketChannel
    @Test
    public void test4() throws Exception{
        SocketChannel socketChannel = SocketChannel.open();
        //如果设置非阻塞模式，就可以在异步模式下调用connect(), read() 和write()了。可以进一步和Selector配合。之后章节会涉及
       //socketChannel.configureBlocking(false);
     //这个需要127.0.0.1的9999端口有进程在监听了，之后会将用ServerSocketChannel监听端口，做服务端
        socketChannel.connect(new InetSocketAddress("127.0.0.1", 9999));
        ByteBuffer buf = ByteBuffer.allocate(48);
        //非阻塞模式时候可以如下等待
        //while(! socketChannel.finishConnect() ){
                //wait, or do something else...
        //}
        //读取数据
        int bytesRead = socketChannel.read(buf);
        System.out.println(bytesRead);
        //写入数据
        String newData = "New String to write to file..." + System.currentTimeMillis();
        buf.clear();
        buf.put(newData.getBytes());
        buf.flip();
        while(buf.hasRemaining()) {
            socketChannel.write(buf);
        }
    }
    }

