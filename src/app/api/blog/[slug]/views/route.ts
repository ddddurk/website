import { allBlogs } from "@contentlayer";
import { prisma } from "@prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { slug: string } }
) => {
  const { slug } = context.params;

  if (!allBlogs.find((blog) => blog.slug === slug))
    return NextResponse.error();

  return NextResponse.json(
    await prisma.blog.findUnique({
      select: {
        id: true,
        slug: true,
        views: true
      },
      where: { slug }
    })
  );
};

export const POST = async (
  request: NextRequest,
  context: { params: { slug: string } }
) => {
  const { slug } = context.params;

  if (!allBlogs.find((blog) => blog.slug === slug))
    return NextResponse.error();

  return NextResponse.json(
    await prisma.blog.upsert({
      create: { slug },
      select: {
        id: true,
        slug: true,
        views: true
      },
      update: {
        views: { increment: 1 }
      },
      where: { slug }
    })
  );
};
