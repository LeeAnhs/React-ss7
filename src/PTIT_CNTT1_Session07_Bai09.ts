class Comment {
  public id: string;
  public userId: string;
  public content: string;
  public replies: Comment[];

  constructor(id: string, userId: string, content: string) {
    this.id = id;
    this.userId = userId;
    this.content = content;
    this.replies = [];
  }

  addReply(reply: Comment): void {
    this.replies.push(reply);
  }
}

class Post {
  public id: string;
  public likes: string[];
  public comments: Comment[];
  public userId: string;
  public content: string;

  constructor(id: string, userId: string, content: string) {
    this.id = id;
    this.likes = [];
    this.comments = [];
    this.userId = userId;
    this.content = content;
  }

  addLike(userId: string): void {
    if (!this.likes.includes(userId)) {
      this.likes.push(userId);
    }
  }

  addComment(comment: Comment): void {
    this.comments.push(comment);
  }
}

class User {
  public id: string;
  public posts: Post[];
  public followers: User[];

  constructor(id: string) {
    this.id = id;
    this.posts = [];
    this.followers = [];
  }

  createPost(content: string): Post {
    const post = new Post(generateId(), this.id, content);
    this.posts.push(post);
    return post;
  }

  comment(postId: string, commentContent: string): void {
    let post: Post | undefined = undefined;
    post = this.posts.find(p => p.id === postId);
    if (!post) {
      for (const user of this.followers) {
        post = user.posts.find(p => p.id === postId);
        if (post) break;
      }
    }
    if (post) {
      const comment = new Comment(generateId(), this.id, commentContent);
      post.addComment(comment);
    }
  }

  follow(user: User): void {
    if (!this.followers.includes(user) && user !== this) {
      this.followers.push(user);
    }
  }

  likePost(postId: string): void {
    let post: Post | undefined = undefined;
    post = this.posts.find(p => p.id === postId);
    if (!post) {
      for (const user of this.followers) {
        post = user.posts.find(p => p.id === postId);
        if (post) break;
      }
    }
    if (post) {
      post.addLike(this.id);
    }
  }

  viewFeed(): Post[] {
    let feed: Post[] = [];
    for (const user of this.followers) {
      feed = feed.concat(user.posts);
    }
    return feed;
  }
}

function generateId(): string {
  return Math.random().toString(36).substr(2, 9);
}

const userA = new User("userA");
const userB = new User("userB");
const userC = new User("userC");

userA.follow(userB);
userA.follow(userC);

const postB = userB.createPost("Đây là bài đăng của userB");
const postC = userC.createPost("Đây là bài đăng của userC");

userA.likePost(postB.id);
userA.likePost(postC.id);

userA.comment(postB.id, "Bài viết hay quá!");
userA.comment(postC.id, "Chào userC!");

const feed = userA.viewFeed();
for (const post of feed) {
  console.log(`Feed: ${post.userId}: ${post.content}`);
  console.log(`Likes: ${post.likes.length}`);
  for (const comment of post.comments) {
    console.log(`- Comment by ${comment.userId}: ${comment.content}`);
  }
}