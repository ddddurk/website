import { fetchBlogBySlug } from "@lib";
import { prisma } from "@prisma";
import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";

export const GET = async (
  request: NextRequest,
  context: { params: { slug: string } }
) => {
  const { slug } = context.params;

  if (!fetchBlogBySlug(`blog/${slug}`))
    return NextResponse.error();

  return NextResponse.json(
    (await prisma.blog.findUnique({
      select: {
        id: true,
        slug: true,
        views: true
      },
      where: { slug: context.params.slug }
    })) || { views: 0 }
  );
};

export const POST = async (
  request: NextRequest,
  context: { params: { slug: string } }
) => {
  const { slug } = context.params;

  if (!fetchBlogBySlug(`blog/${slug}`))
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
