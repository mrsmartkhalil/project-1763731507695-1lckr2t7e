import { NextRequest, NextResponse } from 'next/server';
import { getBlogPosts, addBlogPost, updateBlogPost, deleteBlogPost } from '@/lib/data';
import { BlogPost } from '@/lib/types';

export async function GET() {
  try {
    const posts = await getBlogPosts();
    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch blog posts' }, { status: 500 });
  }
}

export async function POST(request: NextRequest) {
  try {
    const post: BlogPost = await request.json();
    await addBlogPost(post);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to add blog post' }, { status: 500 });
  }
}

export async function PUT(request: NextRequest) {
  try {
    const { id, ...data } = await request.json();
    await updateBlogPost(id, data);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update blog post' }, { status: 500 });
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    if (!id) {
      return NextResponse.json({ error: 'ID is required' }, { status: 400 });
    }
    await deleteBlogPost(id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete blog post' }, { status: 500 });
  }
}
